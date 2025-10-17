export interface PhoneValidationResponse {
  phone_number: string;
  phone_format: {
    international: string;
    national: string;
  };
  phone_carrier: {
    name: string;
    line_type: string;
    mcc: string;
    mnc: string;
  };
  phone_location: {
    country_name: string;
    country_code: string;
    country_prefix: string;
    region: string;
    city: string;
    timezone: string;
  };
  phone_messaging: {
    sms_domain: string;
    sms_email: string;
  };
  phone_validation: {
    is_valid: boolean;
    line_status: string;
    is_voip: boolean;
    minimum_age: number;
  };
  phone_registration: {
    name: string;
    type: string;
  };
  phone_risk: {
    risk_level: string;
    is_disposable: false;
    is_abuse_detected: false;
  };
  phone_breaches: {
    total_breaches: number;
    date_first_breached: string;
    date_last_breached: string;
    breached_domains: [
      {
        domain: string;
        breach_date: string;
      }
    ];
  };
}
