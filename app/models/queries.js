var queries = {
    insertProvider: `INSERT INTO 
                    service.provider
                    (first_name, last_name, middle_name, work_radius, status, cnic, username, date_of_birth, photo, phone_number_1, phone_number_2, brief_description, detailed_description)
                    VALUES (?, ?, ?, IFNULL(?,DEFAULT(work_radius)), IFNULL(?,DEFAULT(status)), ?, ?, ?, IFNULL(?,DEFAULT(photo)), ?, IFNULL(?,DEFAULT(phone_number_2)), ?, IFNULL(?,DEFAULT(detailed_description)));`,
    insertCity:     `INSERT IGNORE INTO service.city(city) VALUES(?);`,
    insertState:    `INSERT IGNORE INTO service.state(state) VALUES(?);`,
    insertCountry:  `INSERT IGNORE INTO service.country(country) VALUES(?);`,
    insertAddress:  `INSERT INTO service.provider_address
                    (provider_id, type, address_row_1, address_row_2, address_row_3, postal_code, latitude, longitude, city, state, country)
                    VALUES
                    (?, ?, ?, ?, ?, ?, POINT(?, ?), POINT(?, ?),
                    (SELECT city.id FROM service.city WHERE city.city=?),
                    (SELECT state.id FROM service.state WHERE state.state=?),
                    (SELECT country.id FROM service.country WHERE country.country=?));`,
};
module.exports = queries;