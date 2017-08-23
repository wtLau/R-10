import * as moment from 'moment'

export const convertTimeHelper = (params) => {
    return moment.unix(params).format("h:mm A")
}

                        