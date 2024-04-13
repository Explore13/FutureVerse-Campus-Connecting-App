import {formatDistanceToNow, isToday, isYesterday, isTomorrow, format} from 'date-fns';



export const calculateRelativeTime = (timestamp) => {
    const date = new Date(timestamp);

    // Calculate distance to now
    const relativeTime = formatDistanceToNow(date, { addSuffix: true });
    // Format the time portion in a 12-hour format with AM/PM
    const timeDescription = format(date, 'h:mm a');

    // Determine if the date is today, yesterday, or tomorrow
    if (isToday(date)) {
        return `Today, ${timeDescription}`;
    } else if (isYesterday(date)) {
        return `Yesterday, ${timeDescription}`;
    } else if (isTomorrow(date)) {
        return `Tomorrow, ${timeDescription}`;
    } else {
        // Return relative time for other dates
        return `${relativeTime}, ${timeDescription}`;
    }
};