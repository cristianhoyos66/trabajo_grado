const db = require('./db');
const reader = require('xlsx');

BigInt.prototype.toJSON = function () {
  return this.toString();
};

async function insertCase(...params) {
  const query =
    'INSERT INTO CASES (year, internal_number, attention_consultant_date, reception_date, plaintiff_id, ' +
    'defendant_id, area_id, matter_id, origin_id, received_case, student_recepcionist_id, ' +
    'student_recepcionist_capacity_id, attention_place_id, student_assignee_id, student_assignee_capacity_id, ' +
    'appointment_date_by_user, individual_participation_id, advisor_id, third_party_representation_id, audience_date_time, ' +
    'audience_result_id, case_status_id, receiver_student_id, student_peaceful_certificate, graphic_support_id) ' +
    'VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  console.log('params', JSON.stringify(params));

  await db.pool.query(query, params);
}

function getNonFKByColumnName(row, columnName) {
  return row[columnName];
}

function scrubData(value) {
  if (typeof value === 'string') {
    value = value.trim();
  }
  if (value === undefined || value === 'N/A') {
    return null;
  } else if (['SI', 'SÍ', 'si', 'sí', 'Si', 'Sí', 'sÍ', 'sI'].includes(value)) {
    return true;
  } else if (['NO', 'no', 'No', 'nO'].includes(value)) {
    return false;
  }
  return value;
}

function formatDate(serialNumber) {
  return serialNumber === null
    ? serialNumber
    : new Date(Date.UTC(0, 0, serialNumber - 1))
        .toISOString()
        .replace(/(.*)T(.*)\..*/, '$1');
}

function formatTime(serial) {
  if (serial === null) {
    return serial;
  } else {
    let utc_days  = Math.floor(serial - 25569);
    let utc_value = utc_days * 86400;                                        
    let date_info = new Date(utc_value * 1000);
    let fractional_day = serial - Math.floor(serial) + 0.0000001;
    let total_seconds = Math.floor(86400 * fractional_day);
    let seconds = total_seconds % 60;
    total_seconds -= seconds;
    let hours = Math.floor(total_seconds / (60 * 60));
    let minutes = Math.floor(total_seconds / 60) % 60;
    return new Date(date_info.getFullYear(), date_info.getMonth(), date_info.getDate(), hours, minutes, seconds);
  }
}

function joinDateAndTime(serialNumberDate, serialNumberTime) {
  let audienceDate = formatDate(serialNumberDate);
  let audienceTime = formatTime(serialNumberTime);
  
  console.log(audienceTime, serialNumberTime, 'time');
  if (audienceDate !== null && audienceTime !== null) {
    return audienceDate + ' ' + audienceTime.getHours() + ':' + audienceTime.getMinutes() + ':' + audienceTime.getSeconds();
  } else {
    return null;
  }
}

async function getFKByColumnName(tableName, name) {
  if (name) {
    let query = 'SELECT id FROM ' + tableName + ' WHERE NAME = ?';
    const res = await db.pool.query(query, [name]);
    return res.length > 0 ? res[0].id : null;
  }
}

async function getFileData() {
  const file = reader.readFile(
    './LIBRO RADICADOR CONSULTORIO JURIDICO (1).xlsx'
  );
  const rows = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[2]]);
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    console.log('row in progress: ', row);
    insertCase(
      scrubData(getNonFKByColumnName(row, 'AÑO')),
      scrubData(getNonFKByColumnName(row, 'RADICADO  INTERNO')),
      formatDate(
        scrubData(getNonFKByColumnName(row, 'FECHA DE ATENCIÓN Y ASESORIA'))
      ),
      formatDate(
        scrubData(getNonFKByColumnName(row, 'FECHA DE RECEPCION DE CASO'))
      ),
      scrubData(
        await getFKByColumnName(
          'PEOPLE',
          getNonFKByColumnName(row, 'PARTE ACCIONANTE')
        )
      ),
      scrubData(
        await getFKByColumnName(
          'PEOPLE',
          getNonFKByColumnName(row, 'PARTE ACCIONADA')
        )
      ),
      scrubData(
        await getFKByColumnName(
          'AREAS',
          getNonFKByColumnName(
            row,
            'ÁREA (CIVIL, FAMILIA, COMERCIAL, LABORAL, PENAL)'
          )
        )
      ),
      scrubData(
        await getFKByColumnName(
          'SUBJECT_MATTERS',
          getNonFKByColumnName(row, 'MATERIA')
        )
      ),
      scrubData(
        await getFKByColumnName(
          'ORIGINS',
          getNonFKByColumnName(row, 'ORIGEN (C.J. o EXT)')
        )
      ),
      scrubData(getNonFKByColumnName(row, 'SE RECEPCIONO EL CASO')),
      scrubData(
        await getFKByColumnName(
          'PEOPLE',
          getNonFKByColumnName(
            row,
            'NOMBRE DEL ESTUDIANTE QUE RECEPCIONO EL CASO'
          )
        )
      ),
      scrubData(
        await getFKByColumnName(
          'CAPACITIES',
          getNonFKByColumnName(row, ' CALIDAD(E/A)')
        )
      ),
      scrubData(
        await getFKByColumnName(
          'ATTENTION_PLACES',
          getNonFKByColumnName(row, 'LUGAR DE ATENCIÓN ')
        )
      ),
      scrubData(
        await getFKByColumnName(
          'PEOPLE',
          getNonFKByColumnName(row, 'ESTUDIANTE A QUIEN SE LE ASIGNO EL CASO')
        )
      ),
      scrubData(
        await getFKByColumnName(
          'CAPACITIES',
          getNonFKByColumnName(row, 'CALIDAD (E/A)')
        )
      ),
      scrubData(
        getNonFKByColumnName(
          row,
          'FECHA DE CITACION DE PARTE USUARIO (MARCAR SI O NO)'
        )
      ),
      scrubData(
        await getFKByColumnName(
          'LEGAL_OFFICER_OPTIONS',
          getNonFKByColumnName(row, 'TUVO PARTICIPACIÓN  INDIVIDUAL ')
        )
      ),
      scrubData(
        await getFKByColumnName(
          'PEOPLE',
          getNonFKByColumnName(row, 'NOMBRE DEL  ASESOR ')
        )
      ),
      scrubData(
        await getFKByColumnName(
          'ATTENTION_RESULTS',
          getNonFKByColumnName(row, 'REALIZÓ  REPRESENTACION DE TERCEROS')
        )
      ),
      joinDateAndTime(
        scrubData(
          getNonFKByColumnName(
            row,
            'FECHA DE AUDIENCIA                        (DD-MM-AA)'
          )
        ),
        scrubData(
          getNonFKByColumnName(
            row,
            'HORA DE AUDIENCIA'
          )
        )
      )
      /*formatDate(
        scrubData(
          getNonFKByColumnName(
            row,
            'FECHA DE AUDIENCIA                        (DD-MM-AA)'
          )
        )
      )*/,
      scrubData(
        await getFKByColumnName(
          'audience_results',
          getNonFKByColumnName(row, 'RESULTADO  DE LA AUDIENCIA')
        )
      ),
      scrubData(
        await getFKByColumnName(
          'CASE_STATUSES',
          getNonFKByColumnName(
            row,
            'ESTADO DEL PROCESO O RESULTADO DEL PROCESO'
          )
        )
      ),
      scrubData(
        await getFKByColumnName(
          'PEOPLE',
          getNonFKByColumnName(row, 'ESTUDIANTE QUE RECIBE EL CASO')
        )
      ),
      scrubData(
        getNonFKByColumnName(row, 'PAZ Y SALVO DE ESTUDIANTE EN CONSULTORIO')
      ),
      scrubData(
        await getFKByColumnName(
          'GRAPHIC_SUPPORT_OPTIONS',
          getNonFKByColumnName(row, 'APOYO GRAFICAR')
        )
      )
    );
  }
}

getFileData();
