document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("Resume form");
    var resumeDisplay = document.getElementById("dynamic Resume Display");
    if (!form || !resumeDisplay) {
        console.error("Form or resume display section not found. Check the HTML structure and IDs.");
        return;
    }
    form.addEventListener("submit", function (event) {
        var _a, _b, _c, _d, _e, _f, _g;
        event.preventDefault();
        // Capture form data
        var name = ((_a = document.getElementById("Name")) === null || _a === void 0 ? void 0 : _a.value) || "";
        var email = ((_b = document.getElementById("Email")) === null || _b === void 0 ? void 0 : _b.value) || "";
        var phoneNumber = ((_c = document.getElementById("PhoneNumber")) === null || _c === void 0 ? void 0 : _c.value) || "";
        var address = ((_d = document.getElementById("Address")) === null || _d === void 0 ? void 0 : _d.value) || "";
        var education = ((_e = document.getElementById("Education")) === null || _e === void 0 ? void 0 : _e.value) || "";
        var skills = ((_f = document.getElementById("Skills")) === null || _f === void 0 ? void 0 : _f.value) || "";
        var experience = ((_g = document.getElementById("WorkExperience")) === null || _g === void 0 ? void 0 : _g.value) || "";
        // Debug logs
        console.log("Form data captured:", { name: name, email: email, phoneNumber: phoneNumber, address: address, education: education, skills: skills, experience: experience });
        // Verify all fields are populated (or display a message if fields are empty)
        if (!name || !email || !phoneNumber || !address || !education || !skills || !experience) {
            console.warn("Some fields are missing values. Fill out all fields.");
            return;
        }
        // Update the resume display
        resumeDisplay.innerHTML = "\n            <div id=\"resume-display\">\n                <h2>".concat(name, "</h2>\n                <p><strong>Email:</strong> ").concat(email, "</p>\n                <p><strong>Phone Number:</strong> ").concat(phoneNumber, "</p>\n                <p><strong>Address:</strong> ").concat(address, "</p>\n                <h3>Education</h3>\n                <p>").concat(education, "</p>\n                <h3>Skills</h3>\n                <p>").concat(skills, "</p>\n                <h3>Experience</h3>\n                <p>").concat(experience, "</p>\n            </div>\n        ");
    });
});
