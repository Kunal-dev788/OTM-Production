"use client";

import { ArrowRight, CheckCircle2, Clock3 } from "lucide-react";
import { useState } from "react";
import { budgetOptions, timelineOptions } from "./contact-data";

type ContactValues = {
  name: string;
  email: string;
  projectTitle: string;
  description: string;
  budget: string;
  timeline: string;
};

type ContactErrors = Partial<Record<keyof ContactValues, string>>;
type SubmitState = "idle" | "success";

const initialValues: ContactValues = {
  name: "",
  email: "",
  projectTitle: "",
  description: "",
  budget: "",
  timeline: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values: ContactValues): ContactErrors {
  const errors: ContactErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Your name must be at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.projectTitle.trim()) {
    errors.projectTitle = "Please add a project title.";
  } else if (values.projectTitle.trim().length < 3) {
    errors.projectTitle = "The project title must be at least 3 characters.";
  }

  if (!values.description.trim()) {
    errors.description = "Please tell us a little about your project.";
  } else if (values.description.trim().length < 20) {
    errors.description = "Please share at least 20 characters about your project.";
  }

  if (!values.budget) {
    errors.budget = "Please select a budget range.";
  }

  if (!values.timeline) {
    errors.timeline = "Please select an expected timeline.";
  }

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(initialValues);
  const [errors, setErrors] = useState<ContactErrors>({});
  const [touched, setTouched] = useState<Partial<Record<keyof ContactValues, boolean>>>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");

  const handleChange = (
    field: keyof ContactValues,
    value: string,
  ) => {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    setSubmitState("idle");

    if (touched[field] || hasSubmitted) {
      setErrors(validate(nextValues));
    }
  };

  const handleBlur = (field: keyof ContactValues) => {
    setTouched((currentTouched) => ({ ...currentTouched, [field]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setHasSubmitted(true);

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState("idle");
      return;
    }

    setSubmitState("success");
  };

  const showError = (field: keyof ContactValues) =>
    Boolean(errors[field] && (touched[field] || hasSubmitted));

  return (
    <form className="contact-form" noValidate onSubmit={handleSubmit}>
      <div className="contact-form__grid">
        <div className={`contact-field${showError("name") ? " contact-field--error" : ""}`}>
          <label htmlFor="contact-name">Your name <span>*</span></label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Piyush Rathore"
            value={values.name}
            aria-describedby={showError("name") ? "contact-name-error" : undefined}
            aria-invalid={showError("name")}
            onBlur={() => handleBlur("name")}
            onChange={(event) => handleChange("name", event.target.value)}
          />
          {showError("name") && <p id="contact-name-error">{errors.name}</p>}
        </div>

        <div className={`contact-field${showError("email") ? " contact-field--error" : ""}`}>
          <label htmlFor="contact-email">Your email <span>*</span></label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            value={values.email}
            aria-describedby={showError("email") ? "contact-email-error" : undefined}
            aria-invalid={showError("email")}
            onBlur={() => handleBlur("email")}
            onChange={(event) => handleChange("email", event.target.value)}
          />
          {showError("email") && <p id="contact-email-error">{errors.email}</p>}
        </div>

        <div
          className={`contact-field contact-field--full${
            showError("projectTitle") ? " contact-field--error" : ""
          }`}
        >
          <label htmlFor="contact-project-title">Project title <span>*</span></label>
          <input
            id="contact-project-title"
            name="projectTitle"
            type="text"
            placeholder="What are we building?"
            value={values.projectTitle}
            aria-describedby={showError("projectTitle") ? "contact-project-title-error" : undefined}
            aria-invalid={showError("projectTitle")}
            onBlur={() => handleBlur("projectTitle")}
            onChange={(event) => handleChange("projectTitle", event.target.value)}
          />
          {showError("projectTitle") && (
            <p id="contact-project-title-error">{errors.projectTitle}</p>
          )}
        </div>

        <div
          className={`contact-field contact-field--full${
            showError("description") ? " contact-field--error" : ""
          }`}
        >
          <label htmlFor="contact-description">Project description <span>*</span></label>
          <textarea
            id="contact-description"
            name="description"
            placeholder="Tell me about the product, scope, and what success looks like..."
            rows={5}
            value={values.description}
            aria-describedby={showError("description") ? "contact-description-error" : undefined}
            aria-invalid={showError("description")}
            onBlur={() => handleBlur("description")}
            onChange={(event) => handleChange("description", event.target.value)}
          />
          {showError("description") && (
            <p id="contact-description-error">{errors.description}</p>
          )}
        </div>

        <div
          className={`contact-field${showError("budget") ? " contact-field--error" : ""}`}
        >
          <label htmlFor="contact-budget">Budget range <span>*</span></label>
          <select
            id="contact-budget"
            name="budget"
            value={values.budget}
            aria-describedby={showError("budget") ? "contact-budget-error" : undefined}
            aria-invalid={showError("budget")}
            onBlur={() => handleBlur("budget")}
            onChange={(event) => handleChange("budget", event.target.value)}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {showError("budget") && <p id="contact-budget-error">{errors.budget}</p>}
        </div>

        <div
          className={`contact-field${showError("timeline") ? " contact-field--error" : ""}`}
        >
          <label htmlFor="contact-timeline">Expected timeline <span>*</span></label>
          <select
            id="contact-timeline"
            name="timeline"
            value={values.timeline}
            aria-describedby={showError("timeline") ? "contact-timeline-error" : undefined}
            aria-invalid={showError("timeline")}
            onBlur={() => handleBlur("timeline")}
            onChange={(event) => handleChange("timeline", event.target.value)}
          >
            <option value="">Select a timeline</option>
            {timelineOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {showError("timeline") && <p id="contact-timeline-error">{errors.timeline}</p>}
        </div>
      </div>

      <div className="contact-form__footer">
        <p className="contact-form__privacy">
          <Clock3 aria-hidden="true" size={15} strokeWidth={2.2} />
          Your details stay private and are only used to reply to this enquiry.
        </p>
        <button className="contact-form__submit" type="submit">
          {submitState === "success" ? "Brief Sent" : "Send Lead Brief"}
          {submitState === "success" ? (
            <CheckCircle2 aria-hidden="true" size={17} strokeWidth={2.4} />
          ) : (
            <ArrowRight aria-hidden="true" size={17} strokeWidth={2.5} />
          )}
        </button>
      </div>

      {submitState === "success" && (
        <p className="contact-form__success" role="status">
          Thanks! Your brief is ready for the next conversation.
        </p>
      )}
    </form>
  );
}
