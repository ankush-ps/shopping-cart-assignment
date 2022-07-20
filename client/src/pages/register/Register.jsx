import { Form, Field } from "react-final-form";
import "./Register.scss";

const required = (value) => (value ? undefined : "Required");
const minLength = (min) => (value) =>
  value && value.length >= min
    ? undefined
    : `Should be at least ${min} characters`;

const minOneDigit = (value) =>
  /[0-9]/.test(value) ? undefined : `Should have atleast 1 digit`;

const minOneAlphabat = (value) =>
  /[a-zA-Z]/.test(value) ? undefined : `Should have atleast 1 alphabat`;

const noSpaces = (value) =>
  /\s/.test(value) ? `Can not contain spaces` : undefined;

const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

const Register = () => (
  <div className="register-page">
    <section className="register-page__info">
      <h1 className="register-page__title">Register</h1>
      <h4 className="register-page__description">
        Get access to your Order, Wishlist and Recommendations
      </h4>
    </section>
    <section className="register-page__form">
      <Form
        onSubmit={() => {}}
        // validate={validate}
        render={({ handleSubmit, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Field name="firstName" validate={required}>
              {({ input, meta }) => (
                <div className="input-group">
                  <label>First Name</label>
                  <input {...input} type="text" placeholder="First Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field name="lastName" validate={required}>
              {({ input, meta }) => (
                <div className="input-group">
                  <label>Last Name</label>
                  <input {...input} type="text" placeholder="Last Name" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <Field name="email" validate={required}>
              {({ input, meta }) => (
                <div className="input-group">
                  <label>Email</label>
                  <input {...input} type="email" placeholder="Email" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="password"
              validate={composeValidators(
                required,
                minLength(6),
                noSpaces,
                minOneAlphabat,
                minOneDigit
              )}
            >
              {({ input, meta }) => (
                <div className="input-group">
                  <label>Password</label>
                  <input {...input} type="password" placeholder="Password" />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <Field
              name="confirmPassword"
              validate={composeValidators(
                required,
                minLength(6),
                noSpaces,
                minOneAlphabat,
                minOneDigit
              )}
            >
              {({ input, meta }) => (
                <div className="input-group">
                  <label>Confirm Password</label>
                  <input
                    {...input}
                    type="password"
                    placeholder="Confirm Password"
                  />
                  {meta.error && meta.touched && <span>{meta.error}</span>}
                </div>
              )}
            </Field>
            <div className="buttons">
              <button type="submit" disabled={submitting}>
                Register
              </button>
            </div>
          </form>
        )}
      />
    </section>
  </div>
);
export default Register;
