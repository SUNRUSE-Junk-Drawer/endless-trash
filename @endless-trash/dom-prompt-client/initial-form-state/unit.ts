import { Form } from "@endless-trash/prompt";
import { initialFormState } from ".";
import { FormState } from "../form-state";

describe(`initialFormState`, () => {
  let output: FormState;

  beforeAll(() => {
    const form: Form = {
      name: `Test Form Name`,
      fields: [
        {
          type: `string`,
          name: `Test Field A Name`,
          label: `Test Field A Label`,
          value: `Test Field A Value`,
          minimumLength: null,
          maximumLength: null,
        },
        {
          type: `string`,
          name: `Test Field B Name`,
          label: `Test Field B Label`,
          value: `Test Field B Value`,
          minimumLength: null,
          maximumLength: null,
        },
      ],
      submitButtonLabel: `Test Form Submit Button Label`,
    };

    output = initialFormState(form);
  });

  it(`includes the form`, () => {
    expect(output.form).toEqual({
      name: `Test Form Name`,
      fields: [
        {
          type: `string`,
          name: `Test Field A Name`,
          label: `Test Field A Label`,
          value: `Test Field A Value`,
          minimumLength: null,
          maximumLength: null,
        },
        {
          type: `string`,
          name: `Test Field B Name`,
          label: `Test Field B Label`,
          value: `Test Field B Value`,
          minimumLength: null,
          maximumLength: null,
        },
      ],
      submitButtonLabel: `Test Form Submit Button Label`,
    });
  });

  it(`includes the fields`, () => {
    expect(output.fields).toEqual({
      "Test Field A Name": {
        editableField: {
          type: `string`,
          name: `Test Field A Name`,
          label: `Test Field A Label`,
          value: `Test Field A Value`,
          minimumLength: null,
          maximumLength: null,
        },
        parsed: `Test Field A Value`,
        raw: `Test Field A Value`,
      },
      "Test Field B Name": {
        editableField: {
          type: `string`,
          name: `Test Field B Name`,
          label: `Test Field B Label`,
          value: `Test Field B Value`,
          minimumLength: null,
          maximumLength: null,
        },
        parsed: `Test Field B Value`,
        raw: `Test Field B Value`,
      },
    });
  });
});
