import Input from "../components/Input";
import ButtonInput from "../components/ButtonInput";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const CreateDict = () => {
  const navigate = useNavigate();

  const SignupSchema = Yup.object().shape({
    name: Yup.string().required("Обязательное поле"),
    minusTwo: Yup.bool().oneOf([true, false], "Поле обязательно для заполнения"),
    minusTree: Yup.bool().oneOf([true, false], "Поле обязательно для заполнения"),
    minusPlural: Yup.bool().oneOf([true, false], "Поле обязательно для заполнения"),
    text: Yup.string().required("Обязательное поле"),
  });

  return (
    <Formik
      initialValues={{
        name: "",
        minusTwo: false,
        minusTree: false,
        minusPlural: false,
        text: "",
      }}
      validationSchema={SignupSchema}
      enableReinitialize={true}
      onSubmit={async (values, { setSubmitting }) => {
        try {
          const response = await api.post("http://127.0.0.1:8000/api/v1/CreateWordListSet/", values);
          console.log(response.data);
        } catch (error) {
          console.error("Ошибка при выполнении запроса:", error);
        } finally {
          setSubmitting(false);
          navigate("/list");
        }
      }}>
      {({ isSubmitting }) => (
        <div className="bg-color_three border border-color_four/15 rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl">
          <h2 className="text-2xl font-medium mb-4 text-color_four">Создать словарь</h2>
          <Form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-color_four font-medium mb-2">
                Название словаря
              </label>
              <Field name="name" className="border border-color_nine p-2 w-full rounded-lg focus:outline-none focus:border-color_five" />
              <ErrorMessage name="name" component="div" className="text-color_four" />
            </div>
            <div className="mb-4">
              <label className="block text-color_four font-medium mb-2">Настройки словаря</label>
              <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/3">
                  <label htmlFor="minusTwo" className="block text-color_four font-medium mb-2">
                    <Field type="checkbox" name="minusTwo" className="mr-2" />
                    Не добавлять слова короче двуъ букв
                  </label>
                </div>
                <div className="px-2 w-1/3">
                  <label htmlFor="minusTree" className="block text-color_four font-medium mb-2">
                    <Field type="checkbox" name="minusTree" className="mr-2" />
                    Не добавлять слова короче трех букв
                  </label>
                </div>
                <div className="px-2 w-1/3">
                  <label htmlFor="minusPlural" className="block text-color_four font-medium mb-2">
                    <Field type="checkbox" name="minusPlural" className="mr-2" />
                    Не добавлять слова во множественном числе
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-4">
              <label htmlFor="text" className="block text-color_four font-medium mb-2">
                Вставте текст из которого вы хотите сделать словарь
              </label>
              <Field
                as="textarea"
                name="text"
                className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-color_five"></Field>
            </div>
            <div>
              <button disabled={isSubmitting} type="submit" className="bg-color_six text-color_four px-4 py-2 rounded-lg hover:opacity-85">
                Создать словарь
              </button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default CreateDict;
