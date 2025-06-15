import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { FormFieldSchema } from "../types/FormFieldSchema";
import { FieldRenderer } from "index";

interface FormWizardProps {
  steps: {
    title?: string;
    description?: string;
    fields: FormFieldSchema[];
    validationMode?: "onChange" | "onBlur" | "onSubmit" | "onTouched";
  }[];
  onSubmit: (values: any) => void;
  onStepChange?: (currentStep: number) => void;
  wizardStyle?: React.CSSProperties;
  navigationStyle?: React.CSSProperties;
  progressStyle?: React.CSSProperties;
  showProgress?: boolean;
  renderProgress?: (current: number, total: number) => React.ReactNode;
  renderNavigation?: (helpers: {
    currentStep: number;
    totalSteps: number;
    isFirst: boolean;
    isLast: boolean;
    handlePrev: () => void;
    handleNext: () => Promise<void>;
  }) => React.ReactNode;
}

const stepperColors = {
  base: "#e5e7eb",
  active: "#6366f1",
  done: "#10b981"
};

const FormWizard: React.FC<FormWizardProps> = ({
  steps,
  onSubmit,
  onStepChange,
  wizardStyle,
  navigationStyle,
  progressStyle,
  showProgress = true,
  renderProgress,
  renderNavigation
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const methods = useForm({
    mode: steps[currentStep]?.validationMode || "onTouched"
  });

  const handleNext = async () => {
    const isValid = await methods.trigger(
      steps[currentStep].fields.map((f) => f.name)
    );
    if (isValid) {
      const nextStep = currentStep + 1;
      if (nextStep < steps.length) {
        setCurrentStep(nextStep);
        onStepChange?.(nextStep);
      } else {
        methods.handleSubmit(onSubmit)();
      }
    }
  };

  const handlePrev = () => {
    const prevStep = currentStep - 1;
    if (prevStep >= 0) {
      setCurrentStep(prevStep);
      onStepChange?.(prevStep);
    }
  };

  return (
    <FormProvider {...methods}>
      <div
        style={{
          ...{
            background: "#fff",
            borderRadius: "1rem",
            boxShadow: "0 4px 24px 0 rgba(30, 41, 59, 0.10)",
            padding: "2.5rem 2rem 2rem 2rem",
            maxWidth: 560,
            margin: "2.5rem auto",
            minHeight: 420,
            position: "relative"
          },
          ...wizardStyle
        }}
      >
        {showProgress && (
          <div style={{ marginBottom: "2rem", ...progressStyle }}>
            {/* Stepper progress bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "2rem",
                marginBottom: ".75rem"
              }}
            >
              {steps.map((step, idx) => {
                const isActive = idx === currentStep;
                const isCompleted = idx < currentStep;
                return (
                  <div
                    key={idx}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <div
                      style={{
                        background: isActive
                          ? stepperColors.active
                          : isCompleted
                            ? stepperColors.done
                            : stepperColors.base,
                        color: "#fff",
                        borderRadius: "50%",
                        width: 32,
                        height: 32,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontWeight: 600,
                        fontSize: 18,
                        boxShadow: isActive ? "0 0 0 2px #6366f1" : "none",
                        transition: "background 0.2s"
                      }}
                    >
                      {isCompleted ? "✓" : idx + 1}
                    </div>
                    {idx < steps.length - 1 && (
                      <div
                        style={{
                          width: 36,
                          height: 3,
                          background:
                            idx < currentStep
                              ? stepperColors.done
                              : stepperColors.base,
                          borderRadius: 6,
                          margin: "0 6px"
                        }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div
              style={{ textAlign: "center", color: "#64748b", fontSize: 16 }}
            >
              <b>{steps[currentStep].title || `Step ${currentStep + 1}`}</b>
              {steps[currentStep].description && (
                <div style={{ fontSize: 14, marginTop: 2 }}>
                  {steps[currentStep].description}
                </div>
              )}
              {renderProgress && renderProgress(currentStep + 1, steps.length)}
            </div>
          </div>
        )}

        {/* Step fields */}
        <form
          onSubmit={methods.handleSubmit(onSubmit)}
          style={{ marginBottom: "0" }}
          autoComplete="off"
        >
          <div>
            {steps[currentStep].fields.map((field) => (
              <FieldRenderer key={field.name} field={field} />
            ))}
          </div>
        </form>

        {/* Navigation buttons */}
        <div
          style={{
            marginTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            gap: "1rem",
            ...navigationStyle
          }}
        >
          {renderNavigation ? (
            renderNavigation({
              currentStep,
              totalSteps: steps.length,
              isFirst: currentStep === 0,
              isLast: currentStep === steps.length - 1,
              handlePrev,
              handleNext
            })
          ) : (
            <>
              <button
                type="button"
                onClick={handlePrev}
                style={{
                  flex: 1,
                  padding: "0.75rem 1.25rem",
                  borderRadius: "0.5rem",
                  background: "#f1f5f9",
                  color: "#334155",
                  fontWeight: 600,
                  border: "none",
                  boxShadow: "0 1px 2px 0 rgba(30,41,59,.06)",
                  cursor: currentStep === 0 ? "not-allowed" : "pointer",
                  opacity: currentStep === 0 ? 0.6 : 1,
                  transition: "all 0.15s"
                }}
                disabled={currentStep === 0}
              >
                Back
              </button>
              <button
                type="button"
                onClick={handleNext}
                style={{
                  flex: 2,
                  padding: "0.75rem 1.25rem",
                  borderRadius: "0.5rem",
                  background: "#6366f1",
                  color: "#fff",
                  fontWeight: 600,
                  border: "none",
                  boxShadow: "0 1px 2px 0 rgba(30,41,59,.06)",
                  cursor: "pointer",
                  transition: "background 0.15s"
                }}
              >
                {currentStep === steps.length - 1 ? "Submit" : "Next"}
              </button>
            </>
          )}
        </div>
      </div>
    </FormProvider>
  );
};

export default FormWizard;
