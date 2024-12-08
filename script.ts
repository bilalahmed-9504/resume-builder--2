document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("Resume form") as HTMLFormElement;
    const resumeDisplay = document.getElementById("dynamic Resume Display") as HTMLDivElement;

    if (!form || !resumeDisplay) {
        console.error("Form or resume display section not found. Check the HTML structure and IDs.");
        return;
    }

    form.addEventListener("submit", (event: Event) => {
        event.preventDefault();

        // Capture form data
        const name = (document.getElementById("Name") as HTMLInputElement)?.value || "";
        const email = (document.getElementById("Email") as HTMLInputElement)?.value || "";
        const phoneNumber = (document.getElementById("PhoneNumber") as HTMLInputElement)?.value || "";
        const address = (document.getElementById("Address") as HTMLInputElement)?.value || "";
        const education = (document.getElementById("Education") as HTMLTextAreaElement)?.value || "";
        const skills = (document.getElementById("Skills") as HTMLTextAreaElement)?.value || "";
        const experience = (document.getElementById("WorkExperience") as HTMLTextAreaElement)?.value || "";

        // Debug logs
        console.log("Form data captured:", { name, email, phoneNumber, address, education, skills, experience });

        // Verify all fields are populated (or display a message if fields are empty)
        if (!name || !email || !phoneNumber || !address || !education || !skills || !experience) {
            console.warn("Some fields are missing values. Fill out all fields.");
            return;
        }

        // Update the resume display
        resumeDisplay.innerHTML = `
            <div id="resume-display">
                <h2>${name}</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                <p><strong>Address:</strong> ${address}</p>
                <h3>Education</h3>
                <p>${education}</p>
                <h3>Skills</h3>
                <p>${skills}</p>
                <h3>Experience</h3>
                <p>${experience}</p>
            </div>
        `;
    });
});
