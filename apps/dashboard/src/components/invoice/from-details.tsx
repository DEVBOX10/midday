"use client";

import { updateInvoiceTemplateAction } from "@/actions/invoice/update-invoice-template-action";
import { Editor } from "@/components/invoice/editor";
import { useAction } from "next-safe-action/hooks";
import { useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { LabelInput } from "./label-input";

export function FromDetails() {
  const { control, setValue, watch } = useFormContext();
  const id = watch("id");
  const content = watch("from_details");

  // NOTE: This is a workaround to get the new content to render
  useEffect(() => {
    if (content) {
      setValue("from_details", content, { shouldValidate: true });
    }
  }, [id]);

  const updateInvoiceTemplate = useAction(updateInvoiceTemplateAction);

  return (
    <div>
      <LabelInput
        name="template.from_label"
        className="mb-2 block"
        onSave={(value) => {
          updateInvoiceTemplate.execute({
            from_label: value,
          });
        }}
      />

      <Controller
        name="from_details"
        control={control}
        render={({ field }) => (
          <Editor
            initialContent={field.value}
            onChange={field.onChange}
            onBlur={(content) => {
              updateInvoiceTemplate.execute({
                from_details: content ? JSON.stringify(content) : null,
              });
            }}
            className="h-[115px]"
          />
        )}
      />
    </div>
  );
}
