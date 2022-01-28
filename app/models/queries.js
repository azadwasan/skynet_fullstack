var queries = {
    startTransaction: `START TRANSACTION;`,
    commit:         `COMMIT;`,
    rollback:       `ROLLBACK;`,

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
    selectAllProviders: `SELECT * from provider;`,
    findProviderById: `SELECT service.provider.*, service.provider_address.*, service.city.city, service.state.state, service.country.country FROM service.provider
                        INNER JOIN service.provider_address ON service.provider.id=provider_address.provider_id
                        INNER JOIN service.city ON service.provider_address.city = service.city.id
                        INNER JOIN service.state ON service.provider_address.state = service.state.id
                        INNER JOIN service.country ON service.provider_address.country = service.country.id
                        WHERE provider.id=?;`,
    findReviewById: `SELECT * FROM service.provider_review WHERE provider_review.provider_id=?;`,
    createReview: `INSERT INTO service.provider_review (provider_id, overall, behavior, time, service, review) VALUES (?, ?, ?, ?, ?, ?);`,

    insertServices: `INSERT INTO service.services_list (service) VALUES (?);`,
    selectAllServices: `SELECT * FROM service.services_list;`,
};
module.exports = queries;
