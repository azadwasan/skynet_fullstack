var queries = {
    startTransaction: `START TRANSACTION;`,
    commit:         `COMMIT;`,
    rollback:       `ROLLBACK;`,

    insertProvider: `INSERT INTO 
                    service.provider
                    (first_name, last_name, middle_name, password, work_radius, status, cnic, username, date_of_birth, photo, phone_number_1, phone_number_2, brief_description, detailed_description)
                    VALUES (?, ?, ?, ?, IFNULL(?,DEFAULT(work_radius)), IFNULL(?,DEFAULT(status)), ?, ?, ?, IFNULL(?,DEFAULT(photo)), ?, IFNULL(?,DEFAULT(phone_number_2)), ?, IFNULL(?,DEFAULT(detailed_description)));`,
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
    selectProvidersByUsername: `SELECT * FROM service.provider WHERE provider.username=?;`,
    findProviderById: `SELECT service.provider.*, 
                        service.provider_address.type, 
                        service.provider_address.address_row_1, service.provider_address.address_row_2,  service.provider_address.address_row_3, 
                        service.provider_address.postal_code, 
                        service.provider_address.latitude, 
                        service.provider_address.longitude, 
                        service.city.city, service.state.state, service.country.country FROM service.provider
                        INNER JOIN service.provider_address ON service.provider.id=provider_address.provider_id
                        INNER JOIN service.city ON service.provider_address.city = service.city.id
                        INNER JOIN service.state ON service.provider_address.state = service.state.id
                        INNER JOIN service.country ON service.provider_address.country = service.country.id
                        WHERE provider.id=?;`,
    findReviewById: `SELECT * FROM service.provider_review WHERE provider_review.provider_id=?;`,
    createReview: `INSERT INTO service.provider_review (provider_id, overall, behavior, time, service, review) VALUES (?, ?, ?, ?, ?, ?);`,
    findServiceByProviderId: `SELECT service.provider_services.* , service.services_list.service
                                FROM service.provider_services 
                                JOIN service.services_list ON service.provider_services.service_id = service.services_list.id
                                WHERE service.provider_services.provider_id=?;`,
    createService: `INSERT INTO service.provider_services (provider_id, service_id, experience, status) VALUES (?, ?, ?, ?);`,
    findDocumentsByProviderId: `SELECT service.provider_services.*
                                    , service.services_list.*
                                    , service.qualification_documents.*
                                FROM 	service.provider_services
                                JOIN 	service.services_list ON service.provider_services.service_id=service.services_list.id
                                JOIN 	service.qualification_documents ON service.provider_services.id = service.qualification_documents.provider_service_id	
                                WHERE service.provider_services.provider_id = ?;`,
    findDocumentServiceAppend: `AND	service.provider_services.service_id = ?;`,
    createProviderServiceDocument: `INSERT 	INTO service.qualification_documents (provider_service_id, document, document_name) 
                                    VALUES ((SELECT service.provider_services.id FROM service.provider_services WHERE service.provider_services.provider_id=? AND service.provider_services.service_id=?), ?, ?);`,

    insertServices: `INSERT INTO service.services_list (service) VALUES (?);`,
    selectAllServices: `SELECT * FROM service.services_list;`,
};
module.exports = queries;
