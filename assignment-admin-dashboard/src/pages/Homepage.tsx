import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa';

function Homepage() {
  const { t } = useTranslation();
  return (
    <div className="mt-10 text-center ">
      <h1 className="text-3xl uppercase">{t('welcome')}</h1>
      <h3 className="mb-10 text-xl">{t('loginToStart')}</h3>
      <section>
        <p>{t('disc')}</p>
        <p>{t('features')}</p>
        <h3 className="py-2 text-xl">{t('stack')}</h3>
        <div className="flex flex-col items-center">
          <ul className="pl-6">
            <li className="flex items-center gap-2">
              <FaCheck size={16} />
              <span>React + TS</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck size={16} />
              <span>React Router</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck size={16} />
              <span>React Context API</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck size={16} />
              <span>TailWind</span>
            </li>
            <li className="flex items-center gap-2">
              <FaCheck size={16} />
              <span>i18n</span>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Homepage;
