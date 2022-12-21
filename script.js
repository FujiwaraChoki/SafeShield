const checkHasUploaded = (id) => {
    // Get the file input element by id
    const fileInput = document.getElementById(id);
    // Get the file input element's value
    const fileInputValue = fileInput.value;
    // Check if the file input element has a value
    if (fileInputValue) {
        // If the file input element has a value, return true
        return true;
    } else {
        // If the file input element does not have a value, return false
        return false;
    }
}

const getAppointmentData = (a_id) => {
    let appointments = {
        1: {
            name: "John Doe",
            email: "johndoe@example.com",
            phone: "1234567890",
            date: "2020-01-01",
            time: "12:00",
        },
        2: {
            name: "Jane Doe",
            email: "janedoe@example.com",
            phone: "0987654321",
            date: "2020-01-02",
            time: "13:00",
        },
    }

    return appointments[a_id];
};