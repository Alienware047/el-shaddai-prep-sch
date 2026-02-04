export interface AdmissionInfo {
  title: string;
  description: string[];
  ctaText: string;
  ctaLink: string;
}

export const admissionsData: AdmissionInfo = {
  title: "Admissions Ongoing",
  description: [
    "Secure a place for your child in the upcoming academic year at El-Shaddai Prep. School & JHS, Suhum, Ghana.",
    "We offer admission for Nursery, Primary, and Junior High School levels.",
    "Requirements include birth certificate, previous school report, and passport photo.",
    "Apply online, attend a brief assessment, and complete enrollment for the new academic term.",
    "Join our community where faith, discipline, and academic excellence shape future leaders.",
  ],
  ctaText: "Start Application",
  ctaLink: "/contact",
};

export interface AdmissionDetail {
  title: string;
  content: string[];
}

export const admissionsIntro = {
  title: "Admissions at El-Shaddai Prep. School & JHS",
  content: [
    "Thank you for considering El-Shaddai Prep. School & JHS for your child’s education. Our admissions are open for the upcoming academic year, and we welcome applications from parents seeking a nurturing, disciplined, and academically rich environment for their children.",
    "We admit students into Nursery, Primary, and Junior High School (JHS) levels. Junior High School students may also have the option to register for our boarding program based on availability and eligibility.",
    "Our boarding facility is designed to support learners from outside Suhum and provide a safe, structured environment that reinforces discipline, academic focus, and community living.",
  ],
};

export const admissionsRequirements: AdmissionDetail = {
  title: "Admission Requirements",
  content: [
    "Completed application form (available at the school office or downloadable from our website).",
    "Original birth certificate and passport photos of the applicant.",
    "Academic records or report card from the previous school level.",
    "Letter of transfer (if applicable).",
    "Medical and vaccination records (recommended).",
    "Application fee payment receipt.",
  ],
};

export const admissionsProcess: AdmissionDetail = {
  title: "How to Apply",
  content: [
    "Obtain the application form from the school office or download it online.",
    "Fill out the application form carefully and attach all required documents.",
    "Submit the completed form to the school office along with the application fee.",
    "Shortlisted applicants may be invited for an entrance assessment or interview.",
    "Upon acceptance, parents/guardians will be notified and required to pay enrollment fees to secure the student’s space.",
  ],
};

export const boardingInfo: AdmissionDetail = {
  title: "Boarding Facility (JHS Only)",
  content: [
    "Our boarding house offers safe, supervised accommodation for JHS students coming from outside Suhum or neighboring towns.",
    "Boarding includes structured study time, meals, morning devotion, and supervision throughout the day.",
    "Students will be cared for by trained matrons and staff who ensure discipline, well-being, and a supportive learning environment.",
    "Parents are encouraged to visit during scheduled visiting hours and participate in boarding events.",
    "Boarders are expected to follow boarding rules concerning curfew, academic routines, and personal conduct.",
  ],
};
