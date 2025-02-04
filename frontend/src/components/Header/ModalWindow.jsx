import { useSelector, useDispatch } from "react-redux";
import { modalWindowSettings } from "../../store/worsaSlice";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import api from "../../utils/api";

const ModelWindow = () => {
  const showWindow = useSelector((state) => state.worsa.modalWindowSettings);
  const dispatch = useDispatch();

  const [settings, setSettings] = useState({});
  const [error, setError] = useState(null);

  const SignupSchema = Yup.object().shape({
    numberWordsDay: Yup.number()
      .typeError("Значение должно быть числом")
      .min(4, "Слишком мало!")
      .max(100, "Слишком много!")
      .required("Обязательное поле"),
    amountInputText: Yup.number()
      .typeError("Значение должно быть числом")
      .min(4, "Слишком мало!")
      .max(100, "Слишком много!")
      .required("Обязательное поле"),
    numberOptionsGuessing: Yup.number()
      .typeError("Значение должно быть числом")
      .min(4, "Слишком мало!")
      .max(8, "Слишком много!")
      .required("Обязательное поле"),
    voiceoverWords: Yup.bool().oneOf([true, false], "Поле обязательно для заполнения"),
    voiceSpead: Yup.bool().oneOf([true, false], "Поле обязательно для заполнения"),
  });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await api.get("/v1/Settings/");
        setSettings(response.data[0]);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          setError("Settings not found");
        } else {
          setError("An error occurred while fetching the settings");
        }
        console.error("There was an error fetching the items!", error);
      }
    };
    fetchSettings();
  }, []);

  const closeModalWindow = () => {
    dispatch(modalWindowSettings(false));
  };

  return (
    <main className={`${showWindow ? "block" : "hidden"} w-screen h-screen absolute`}>
      <Formik
        initialValues={{
          numberWordsDay: settings.numberWordsDay || "",
          amountInputText: settings.amountInputText || "",
          numberOptionsGuessing: settings.numberOptionsGuessing || "",
          voiceoverWords: settings.voiceoverWords || false,
          voiceSpead: settings.voiceSpead || false,
        }}
        validationSchema={SignupSchema}
        enableReinitialize={true} // Для обновления начальных значений при изменении settings

        onSubmit={async (values, { setSubmitting }) => {
          try {
            const response = await api.post("/v1/Settings/", values);
            console.log(response.data);
          } catch (error) {
            console.error("Ошибка при выполнении запроса:", error);
          } finally {
            setSubmitting(false);
            window.location.reload();
          }
        }}>
        {({ isSubmitting }) => (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2">
            <div className="border border-color_four/10 rounded-lg bg-color_eight/30 backdrop-blur-md">
              <Form className="p-4">
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label htmlFor="numberWordsDay" className="mb-3 block text-base font-medium text-color_nine">
                        Количество слов в день
                      </label>
                      <Field
                        name="numberWordsDay"
                        className="w-full appearance-none rounded-md border border-color_four bg-color_four py-3 px-6 text-base font-medium text-color_eight outline-none focus:border-color_seven focus:shadow-md"
                      />
                      <ErrorMessage name="numberWordsDay" component="div" className="text-color_four" />
                    </div>
                  </div>

                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label htmlFor="amountInputText" className="mb-3 block text-base font-medium text-color_nine">
                        Количество повторов при написании
                      </label>
                      <Field
                        name="amountInputText"
                        className="w-full appearance-none rounded-md border border-color_four bg-color_four py-3 px-6 text-base font-medium text-color_eight outline-none focus:border-color_seven focus:shadow-md"
                      />
                      <ErrorMessage name="amountInputText" component="div" className="text-color_four" />
                    </div>
                  </div>

                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label htmlFor="numberOptionsGuessing" className="mb-3 block text-base font-medium text-color_nine">
                        Количество вариантов при тесте
                      </label>
                      <Field
                        name="numberOptionsGuessing"
                        className="w-full appearance-none rounded-md border border-color_four bg-color_four py-3 px-6 text-base font-medium text-color_eight outline-none focus:border-color_seven focus:shadow-md"
                      />
                      <ErrorMessage name="numberOptionsGuessing" component="div" className="text-color_four" />
                    </div>
                  </div>
                </div>

                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-color_ten">Озвучка</label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <Field name="voiceoverWords" type="checkbox" className="w-4 h-4 accent-color_six" />
                      <label htmlFor="voiceoverWords" className="pl-3 text-base font-medium text-color_nine">
                        Включить
                      </label>
                    </div>
                    <ErrorMessage name="voiceoverWords" component="div" className="text-color_four" />
                  </div>
                </div>

                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-color_ten">Скорость озвучки</label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <Field name="voiceSpead" type="checkbox" className="w-4 h-4 accent-color_ten" />
                      <label htmlFor="voiceSpead" className="pl-3 text-base font-medium text-color_nine">
                        Замедлить озвучку
                      </label>
                    </div>
                    <ErrorMessage name="voiceSpead" component="div" className="text-color_four" />
                  </div>
                </div>

                <div className="flex flex-row">
                  <div
                    onClick={closeModalWindow}
                    className="hover:opacity-85 cursor-pointer rounded-md w-40 mr-4 bg-color_five py-3 px-8 text-center text-base font-semibold text-color_four outline-none">
                    Отмена
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="hover:opacity-85 rounded-md bg-color_nine py-3 px-8 text-center text-base font-semibold text-color_four outline-none">
                    Сохранить
                  </button>
                </div>
              </Form>
            </div>
          </div>
        )}
      </Formik>
    </main>
  );
};

export default ModelWindow;
