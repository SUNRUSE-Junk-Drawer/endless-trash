import { applyForms } from ".";
import { FormGroup } from "@endless-trash/prompt";
import { FormsState } from "../forms-state";

describe(`applyForms`, () => {
  let output: FormsState;

  beforeAll(() => {
    const formGroup: FormGroup = {
      name: `Test Form Group Name`,
      forms: [
        {
          name: `Test Added Form`,
          fields: [
            {
              type: `integer`,
              name: `Test Added Field`,
              label: `Test Label`,
              minimum: null,
              maximum: null,
              required: true,
              value: 64.5,
            },
          ],
          submitButtonLabel: `Test Submit Button Label`,
        },
        {
          name: `Test Retained Form`,
          fields: [
            {
              type: `integer`,
              name: `Test Reset Field`,
              label: `Test Label`,
              minimum: null,
              maximum: null,
              required: true,
              value: 31.1,
            },
            {
              type: `integer`,
              name: `Test Retained Field`,
              label: `Test Label`,
              minimum: null,
              maximum: null,
              required: true,
              value: 44.5,
            },
          ],
          submitButtonLabel: `Test Submit Button Label`,
        },
      ],
    };

    const formsState: FormsState = {
      "Test Removed Form": {
        form: {
          name: `Test Removed Form`,
          fields: [],
          submitButtonLabel: `Test Removed Submit Button Label`,
        },
        id: `Test Removed Form Id`,
        fields: {
          "Test Removed Field": {
            editableField: {
              type: `integer`,
              name: `Test Removed Field`,
              label: `Test Label`,
              minimum: null,
              maximum: null,
              required: true,
              value: 87.4,
            },
            id: `Test Removed Field Id`,
            parsed: 13.3,
            raw: `Test Removed Raw`,
          },
        },
      },
      "Test Retained Form": {
        form: {
          name: `Test Retained Form`,
          fields: [],
          submitButtonLabel: `Test Previous Retained Submit Button Label`,
        },
        id: `Test Retained Form Id`,
        fields: {
          "Test Retained Field": {
            editableField: {
              type: `integer`,
              name: `Test Retained Field`,
              label: `Test Label`,
              minimum: null,
              maximum: null,
              required: true,
              value: 44.5,
            },
            id: `Test Retained Field Id`,
            parsed: 11.2,
            raw: `Test Retained Raw`,
          },
          "Test Reset Field": {
            editableField: {
              type: `integer`,
              name: `Test Reset Field`,
              label: `Test Label`,
              minimum: null,
              maximum: null,
              required: true,
              value: 74.21,
            },
            id: `Test Reset Field Id`,
            parsed: 82.4,
            raw: `Test Reset Raw`,
          },
        },
      },
    };

    output = applyForms(formGroup, formsState);
  });

  it(`adds state for added forms`, () => {
    expect(output[`Test Added Form`]).toEqual({
      form: {
        name: `Test Added Form`,
        fields: [
          {
            type: `integer`,
            name: `Test Added Field`,
            label: `Test Label`,
            minimum: null,
            maximum: null,
            required: true,
            value: 64.5,
          },
        ],
        submitButtonLabel: `Test Submit Button Label`,
      },
      id: `test-form-group-name--test-added-form`,
      fields: {
        "Test Added Field": {
          editableField: {
            type: `integer`,
            name: `Test Added Field`,
            label: `Test Label`,
            minimum: null,
            maximum: null,
            required: true,
            value: 64.5,
          },
          id: `test-form-group-name--test-added-form--test-added-field`,
          parsed: 64.5,
          raw: `64.5`,
        },
      },
    });
  });

  it(`updates state for retained forms`, () => {
    expect(output[`Test Retained Form`]).toEqual({
      form: {
        name: `Test Retained Form`,
        fields: [
          {
            type: `integer`,
            name: `Test Reset Field`,
            label: `Test Label`,
            minimum: null,
            maximum: null,
            required: true,
            value: 31.1,
          },
          {
            type: `integer`,
            name: `Test Retained Field`,
            label: `Test Label`,
            minimum: null,
            maximum: null,
            required: true,
            value: 44.5,
          },
        ],
        submitButtonLabel: `Test Submit Button Label`,
      },
      id: `Test Retained Form Id`,
      fields: {
        "Test Retained Field": {
          editableField: {
            type: `integer`,
            name: `Test Retained Field`,
            label: `Test Label`,
            minimum: null,
            maximum: null,
            required: true,
            value: 44.5,
          },
          id: `Test Retained Field Id`,
          parsed: 11.2,
          raw: `Test Retained Raw`,
        },
        "Test Reset Field": {
          editableField: {
            type: `integer`,
            name: `Test Reset Field`,
            label: `Test Label`,
            minimum: null,
            maximum: null,
            required: true,
            value: 31.1,
          },
          id: `Test Reset Field Id`,
          parsed: 31.1,
          raw: `31.1`,
        },
      },
    });
  });

  it(`does not include any further forms`, () => {
    expect(Object.keys(output).length).toEqual(2);
  });
});
