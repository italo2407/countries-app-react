import { gql } from '@apollo/client';

const GET_COUNTRIES = gql`
    query countryList (
            $offset:Int, 
            $first:Int, 
            $search:String, 
            $region:String, 
            $currency:String, 
            $language:String
        ) {
        Country (
            first:$first, 
            offset: $offset, 
            orderBy: name_asc,
              filter: {
              OR: [
                { alpha2Code_contains: $search },
                { name_contains: $search },
              ],
                AND: [
                { 
                  subregion: {
                      region: {
                      name_contains: $region
                    }
                    } 
                },
                { 
                  currencies: {
                      name_contains: $currency
                    }
                },
                {
                  officialLanguages: {
                    name_contains: $language
                  }
                }
              ]
            }) {
                    _id
                    name
                    alpha2Code
                    population
                    capital
                    subregion {
                        name
                        region {
                            name
                        }
                    }
                    officialLanguages {
                        name
                    }
                    currencies {
                        name
                    }
                    flag {
                        svgFile
                    }
                }
    }
`

const GET_REGIONS = gql`
    query regionList {
        Region(orderBy: name_asc) {
            name
        }
    }
`

const GET_LANGUAGES = gql`
    query languageList {
        Language(orderBy: name_asc) {
            name
        }
    }
`

const GET_CURRENCIES = gql`
    query currencyList {
        Currency(orderBy: name_asc) {
            name
        }
    }
`

const GET_COUNTRY = gql`
    query country ($id: String) {
        Country (_id:$id) {
            _id
            name
            area
            alpha2Code
            alpha3Code
            population
            capital
            subregion {
                name
                region {
                    name
                }
            }
            officialLanguages {
                name
            }
            currencies {
                name
            }
            flag {
                svgFile
            }
            timezones {
                name
            }
            borders {
                name
            }
        }
    }
` 

export {
    GET_COUNTRIES,
    GET_COUNTRY,
    GET_REGIONS,
    GET_LANGUAGES,
    GET_CURRENCIES
}
