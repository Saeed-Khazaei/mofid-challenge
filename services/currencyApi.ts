import axios from "axios"
import { Currency } from "../models/apiResponses"
import { getCurrenciesUrl, getCurrencyUrl } from "../utils/endpoints"

export default {
  async getCurrencies() {
    try {
      const response = await axios.get<string[]>(getCurrenciesUrl)
      return response
    } catch (error: any) {
      throw new Error(error.response)
    }
  },
  async getCurrency(currency: string, page: number) {
    try {
      const response = await axios.get<Currency[]>(`${getCurrencyUrl}?vs_currency=${currency}&page=${page}&per_page=20&price_change_percentage=24h,7d`)
      return response
    } catch (error: any) {
      throw new Error(error.response)
    }
  },

}