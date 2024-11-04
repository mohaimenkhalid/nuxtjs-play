import moment from "moment-timezone";

export const useTimezone = () => {
    const utcToLocal = (utcTime: Date, format: string = "YYYY-MM-DD h:mm a") => {
        let parseDateTime = moment(utcTime);
        return parseDateTime.tz('Asia/Dhaka') //Asia/Karachi
            .format(format)
    }

    const localToUtc = (localTime: string, format: string ="YYYY-MM-DD h:mm a") => {
        return moment(localTime).utc(true)
            .format(format)
    }

    const format = (time: Date) => {
        return moment(time).tz('Asia/Dhaka').format(format)
    }

    return {
        format,
        utcToLocal,
        localToUtc
    }
}