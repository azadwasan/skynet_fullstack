//Constructor for Provider object
const Providers = function(bodyData){
    this.firstName              = bodyData.firstName,
    this.lastName               = bodyData.lastName,
    this.middleName             = bodyData.middleName,
    this.password               = null,
    this.workRadius             = bodyData.workRadius,
    this.status                 = bodyData.status,
    this.cnic                   = bodyData.cnic,
    this.userName               = bodyData.userName,
    this.dateOfBirth            = bodyData.dateOfBirth,
    this.photo                  = bodyData.photo,
    this.phoneNumber1           = bodyData.phoneNumber1,
    this.phoneNumber2           = bodyData.phoneNumber2,
    this.briefDescription       = bodyData.briefDescription,
    this.detailedDescription    = bodyData.detailedDescription
};

const ProviderAddress = function(bodyData){
    this.providerId     = null,
    this.addressType    = bodyData.addressType,
    this.addressRow1    = bodyData.addressRow1,
    this.addressRow2    = bodyData.addressRow2,
    this.addressRow3    = bodyData.addressRow3,
    this.postalCode     = bodyData.postalCode,
    this.latitudeX      = bodyData.latitutdeX,
    this.latitudeY      = bodyData.latitutdeY,
    this.longitudeX     = bodyData.longitudeX,
    this.longitudeY     = bodyData.longitudeY,
    this.city           = bodyData.city,
    this.state          = bodyData.state,
    this.country        = bodyData.country
};

const ProviderReview = function(bodyData){
    this.providerId     = null,
    this.overall        = bodyData.overall,
    this.behavior       = bodyData.behavior,
    this.time           = bodyData.time,
    this.service        = bodyData.service,
    this.review         = bodyData.review
};

const ProviderService = function(bodyData){
    this.providerId = bodyData.providerId,
    this.serviceId  = bodyData.serviceId,
    this.experience = bodyData.experience,
    this.status     = bodyData.status
};

const ProviderDocument = function(bodyData){
    this.providerId         = null,
    this.providerServiceId  = null,
    this.document           = bodyData.document,
    this.documentName      = bodyData.documentName
};

module.exports = {Providers, ProviderAddress, ProviderReview, ProviderService, ProviderDocument}