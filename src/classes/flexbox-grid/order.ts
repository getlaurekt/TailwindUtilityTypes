import GridNumberity from "../../utils/gridNumberity";

type Orderity = "first" | "last" | "none";
type Order = `order-${GridNumberity | Orderity}`;

export default Order;
