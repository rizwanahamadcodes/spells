export const formatName = (name: string) => {
    let nameWords = name.split("-");
    nameWords = nameWords.map((word) => word[0].toUpperCase() + word.slice(1));
    return nameWords.join(" ");
};
