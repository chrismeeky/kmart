import { formDataToObject } from "../form-data-to-object";

describe("formDataToObject", () => {
  test("should convert FormData to object", () => {
    const formData = new FormData();
    formData.append("name", "John");
    formData.append("age", "30");

    const result = formDataToObject(formData);

    expect(result).toEqual({
      name: "John",
      age: "30",
    });
  });
});
