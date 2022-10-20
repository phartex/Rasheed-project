export interface ISendAmountResponse {
    Company_name: string
    Username: string
    Customer_id: string
    Customer_name: string
    Customer_address: string
    Customer_phone: string
    Meter_id: string
    Meter_type: string
    Total_paid: string
    Total_unit: string
    Unit: string
    Price: string
    Price_unit: string
    Price_Categories: string
    Rate: string
    Token: string
    Gen_time: string
  }
  

  export interface ISendAmount {
    CompanyName: string
    UserName: string
    PassWord: string
    MeterId: string
    is_vend_by_unit: string
    Amount: number
  }