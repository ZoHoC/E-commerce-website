import styles from "./Section.module.scss";

const Section = ({
  helperText,
  title,
  actionContainer,
  isSecondary = false,
  children,
}) => {
  return (
    <section className={`Section ${isSecondary ? "Section_secondary" : ""}`}>
      <div className="Section-Inner">
        {helperText && <p className="Section-HelperText">{helperText}</p>}
        {(title || actionContainer) && (
          <div className="Section-Header">
            {title && <h2 className="Section-Title">{title}</h2>}
            {actionContainer}
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default Section;
