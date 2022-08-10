import Timeslot from "./timeslot.model";

class Delivery {
    constructor(user, status, timeslotId, createdAt, updatedAt) {
        this.user = user;
        this.status = status;
        this.timeslot = timeslotId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}

export default Delivery;