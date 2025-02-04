import { useSelector, useDispatch } from "react-redux";
import { modalWindowSettings } from "../../store/worsaSlice";
import { useState, useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import api from "../../utils/api";

const ModelWindow = () => {
  // Для открытия и закрытия окна
  const showWindow = useSelector((state) => state.worsa.modalWindowSettings);
  const dispatch = useDispatch();

  // Выполняет get запрос
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
      .max(100, "Слишком много!")
      .required("Обязательное поле"),
    voiceoverWords: Yup.boolean()
        .oneOf([true], 'Поле обязательно для заполнения'),
    voiceSpead: Yup.boolean()
        .oneOf([true], 'Поле обязательно для заполнения'),
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

  console.log(settings, "<<< get data");

  // Для post запроса
  const [formData, setFormData] = useState({
    numberWordsDay: "",
    amountInputText: "",
    numberOptionsGuessing: "",
    voiceoverWords: false,
    voiceSpead: false,
  });

  // Формируем данные для post запроса
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  console.log(formData, "<<< post data");

  // Выполняем post запрос
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Выполняем POST-запрос с использованием настроенного экземпляра axios
      const response = await api.post("/v1/Settings/", formData);

      // Обрабатываем ответ
      console.log(response.data);
    } catch (error) {
      // Обрабатываем ошибку
      if (error.response) {
        // Сервер вернул ответ с ошибкой
        console.error("Ошибка ответа сервера:", error.response.data);
        console.error("Статус ответа:", error.response.status);
        console.error("Заголовки ответа:", error.response.headers);
      } else if (error.request) {
        // Запрос был сделан, но ответ не получен
        console.error("Ошибка запроса:", error.request);
      } else {
        // Что-то пошло не так при настройке запроса
        console.error("Ошибка настройки запроса:", error.message);
      }
      console.error("Ошибка при выполнении запроса:", error.config);
    }
  };

  // Закрывает modal window
  const closeModalWindow = () => {
    dispatch(modalWindowSettings(false));
  };

  return (
    <main className={`${showWindow ? "block" : "hidden"} w-screen h-screen absolute`}>
      <Formik
        initialValues={{
          numberWordsDay: "",
          amountInputText: "",
          numberOptionsGuessing: "",
          voiceoverWords:false, 
          voiceSpead: false,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}>
        {({ isSubmitting }) => (
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2">
            <div className="border border-color_four/10 rounded-lg bg-color_eight/30 backdrop-blur-md">
              {/* <form onSubmit={handleSubmit} className="p-4"> */}
              <Form className="p-4">
                <div className="-mx-3 flex flex-wrap">
                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label htmlFor="numberWordsDay" className="mb-3 block text-base font-medium text-color_nine">
                        Количество повторов при написании
                      </label>
                      <Field
                        name="amountInputText"
                        placeholder={settings.numberWordsDay}
                        value={formData.numberWordsDay}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-md border border-color_four bg-color_four py-3 px-6 text-base font-medium text-color_eight outline-none focus:border-color_seven focus:shadow-md"
                      />
                      <ErrorMessage name="numberWordsDay" component="div" className="text-color_four" />
                    </div>
                  </div>

                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label htmlFor="amountInputtext" className="mb-3 block text-base font-medium text-color_nine">
                        количество повторов при написании
                      </label>
                      <Field
                        name="amountInputText"
                        placeholder={settings.amountInputText}
                        value={formData.amountInputText}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-md border border-color_four bg-color_four py-3 px-6 text-base font-medium text-color_eight outline-none focus:border-color_seven focus:shadow-md"
                      />
                      <ErrorMessage name="amountInputText" component="div" className="text-color_four"/>
                    </div>
                  </div>

                  <div className="w-full px-3">
                    <div className="mb-5">
                      <label htmlFor="numberOptionsGuessing" className="mb-3 block text-base font-medium text-color_nine">
                        Количество повторов при написании
                      </label>
                      <Field
                        name="numberOptionsGuessing"
                        placeholder={settings.numberOptionsGuessing}
                        value={formData.numberOptionsGuessing}
                        onChange={handleChange}
                        className="w-full appearance-none rounded-md border border-color_four bg-color_four py-3 px-6 text-base font-medium text-color_eight outline-none focus:border-color_seven focus:shadow-md"
                      />
                      <ErrorMessage name="numberOptionsGuessing" component="div" className="text-color_four"/>
                    </div>
                  </div>

                </div>

                {/* Радио кнопки */}
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-color_ten">Озвучка</label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        name="voiceoverWords"
                        type="checkbox"
                        checked={formData.voiceoverWords}
                        onChange={handleChange}
                        className="w-4 h-4 accent-color_six"
                      />
                      <label htmlFor="voiceoverWords" className="pl-3 text-base font-medium text-color_nine">
                        Включить
                      </label>
                    </div>
                  </div>
                </div>

                {/* Радио кнопки */}
                <div className="mb-5">
                  <label className="mb-3 block text-base font-medium text-color_ten">Скорость озвучки</label>
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center">
                      <input
                        name="voiceSpead"
                        type="checkbox"
                        checked={formData.voiceSpead}
                        onChange={handleChange}
                        className="w-4 h-4 accent-color_ten"
                      />
                      <label htmlFor="voiceSpead" className="pl-3 text-base font-medium text-color_nine">
                        Замедлить озвучку
                      </label>
                    </div>
                  </div>
                </div>

                {/* Кнопки  */}
                <div className="flex flex-row">
                  <div
                    onClick={closeModalWindow}
                    className="hover:opacity-85 cursor-pointer rounded-md w-40 mr-4 bg-color_five py-3 px-8 text-center text-base font-semibold text-color_four outline-none">
                    Отмена
                  </div>
                  <button className="hover:opacity-85 rounded-md bg-color_nine py-3 px-8 text-center text-base font-semibold text-color_four outline-none">
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
