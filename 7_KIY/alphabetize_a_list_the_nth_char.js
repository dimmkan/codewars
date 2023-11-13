const sortIt = (list, n) => list
    .split(", ")
    .sort((a, b) => {
        const charCodeA = a.toLowerCase().charCodeAt(n - 1);
        const charCodeB = b.toLowerCase().charCodeAt(n - 1);

        return charCodeA === charCodeB
            ? a.localeCompare(b)
            : charCodeA - charCodeB;
    })
    .join(", ");

console.log(sortIt('bill, bell, ball, bull', 2));