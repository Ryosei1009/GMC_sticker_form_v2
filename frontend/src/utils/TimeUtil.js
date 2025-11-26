import { format, fromUnixTime } from "date-fns";

export function TimeFormat(unix, formatStr) {
    if (!unix) {
        return "";
    }
    const date = fromUnixTime(parseInt(unix / 1000));
    if (isNaN(date.getTime())) {
        return 'Invalid date';
    }
    return format(date, formatStr);
}