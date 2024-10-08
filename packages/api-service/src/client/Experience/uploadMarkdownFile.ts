import ApiCall, { ExtractInputType, ExtractOutputType } from "../../ApiCall";
import { UploadFileInput, UploadFileOutput } from "supabase-types";
import { SupabaseTypedClient } from "../../supabase";

export const uploadExperienceMarkdownFile = (supabase: SupabaseTypedClient) =>
    new ApiCall(async (parameters: { experience_slug: string; file: File }) => {
        const formData = new FormData();
        formData.set("file", parameters.file);
        formData.set("category_slug", parameters.experience_slug);
        formData.set("file_role", "experience_markdown");
        const payload = {
            body: formData,
        };

        const { data, error } = (await supabase.functions.invoke(
            "upload-file",
            payload,
        )) as {
            data: UploadFileOutput;
            error: any;
        };

        return data;
    });

export type UploadExperienceMarkdownFileInputType = ExtractInputType<
    ReturnType<typeof uploadExperienceMarkdownFile>
>;
export type UploadExperienceMarkdownFileOutputType = ExtractOutputType<
    ReturnType<typeof uploadExperienceMarkdownFile>
>;
