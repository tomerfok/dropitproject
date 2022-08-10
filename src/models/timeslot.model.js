class Timeslot {
    constructor(timeslotId, startTime, endTime, supportedAddresses) {
        this.timeslotId = timeslotId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.supportedAddresses = supportedAddresses;
    }
}

export default Timeslot;