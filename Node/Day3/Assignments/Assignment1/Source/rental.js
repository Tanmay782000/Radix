class mobike {
  customer_name = ""
  phone_number = ""
  bike_number = ""
  days = ""
  payment = ""
  get computed() {
    var res
    if (this.days <= 5)
      return res = this.days * 500;
    else if (this.days <= 10)
      return res = (5 * 500) + ((this.days - 5) * 400);
    else
      return res = (5 * 500) + (5 * 400) + ((this.days - 10) * 100);
  }
}
module.exports.mobike = mobike