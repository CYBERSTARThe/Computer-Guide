function showTopic(topic) {

    const computersLesson =
        document.getElementById("computersLesson");

    const programmingLesson =
        document.getElementById("programmingLesson");

    const internetLesson =
        document.getElementById("internetLesson");

    const aiLesson =
        document.getElementById("aiLesson");

    const cybersecurityLesson =
        document.getElementById("cybersecurityLesson");

    const technologyLesson =
        document.getElementById("technologyLesson");


    /* Hide all lessons */

    computersLesson.style.display = "none";

    programmingLesson.style.display = "none";

    internetLesson.style.display = "none";

    aiLesson.style.display = "none";

    cybersecurityLesson.style.display = "none";

    technologyLesson.style.display = "none";


    /* Show selected lesson */

    if (topic === "computers") {

        computersLesson.style.display = "block";

    }


    if (topic === "programming") {

        programmingLesson.style.display = "block";

    }


    if (topic === "internet") {

        internetLesson.style.display = "block";

    }


    if (topic === "ai") {

        aiLesson.style.display = "block";

    }


    if (topic === "cybersecurity") {

        cybersecurityLesson.style.display = "block";

    }


    if (topic === "technology") {

        technologyLesson.style.display = "block";

    }

}
