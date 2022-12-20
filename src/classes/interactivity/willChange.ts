type WillChanges = "auto" | "scroll" | "contents" | "transform";

type WillChange = `will-change-${WillChanges}`;

export default WillChange;
