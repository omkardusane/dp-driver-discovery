module.exports = function (filters, { offset, limit }) {
    // Dummy data
    const data = [
        { id: 1, name: "Alice Wonderland", status: "applied" },
        { id: 2, name: "Bob Builder", status: "interviewing" },
        { id: 3, name: "Chris Brown", status: "rejected" }
    ];
    return data;
};