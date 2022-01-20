var queries = {
    insertProvider: `INSERT INTO 
                    service.provider(
                    first_name, last_name, middle_name, work_radius, status, cnic, username, date_of_birth, photo, phone_number_1, phone_number_2, brief_description, detailed_description)
                    VALUES (?, ?, ?, IFNULL(?,DEFAULT(work_radius)), IFNULL(?,DEFAULT(status)), ?, ?, ?, IFNULL(?,DEFAULT(photo)), ?, IFNULL(?,DEFAULT(phone_number_2)), ?, IFNULL(?,DEFAULT(detailed_description)));`,
    insertCity: `INSERT INTO service.city values(?);`,
    insertState: `INSERT INTO service.state values(?);`,
    insertCountry: `INSERT INTO service.country values(?);`,
};

module.exports = queries;