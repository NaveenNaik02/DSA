(() => {
    const isAnagram = (first: string, second: string): boolean => {
        if (first.length !== second.length) return false;

        const lookup = new Map<string, number>();

        for (const char of first) {
            const count = lookup.get(char) || 0;
            lookup.set(char, count + 1)
        }

        for (const char of second) {
            const count = lookup.get(char);
            if (!count) {
                return false;
            }
            lookup.set(char, count - 1)
        }
        return true;
    }
    const first = "listen";
    const second = "silent";

    console.log(isAnagram(first, second));
})()