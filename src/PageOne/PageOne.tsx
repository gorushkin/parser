import { useExportContext } from '../AppContext/AppContext';
import { Button } from '../Button/Button';
import { DropZone } from '../DropZone';
import { getTest } from '../services';
import style from './PageOne.module.scss';
import { useFetch } from '../useFetch';

export const PageOne = () => {
  const { fileInfo, handleStartClick, isStorageEmpty, loadTransactions } =
    useExportContext();

  const { handler, isLoading } = useFetch(getTest);

  const handleTestClick = () => handler();

  return (
    <div className={style.wrapper}>
      <div className={style.inner}>
        <h1>Vakif statements parser</h1>
        <DropZone className={style.dropzone} />
        <div className={style.controls}>
          <Button
            disabled={!fileInfo.content}
            onClick={handleStartClick}
            label="Start"
          />
          <Button
            disabled={isStorageEmpty}
            label="Load from local localStorage"
            onClick={loadTransactions}
          />
          <Button
            label="Test Api"
            isLoading={isLoading}
            onClick={handleTestClick}
          />
        </div>
      </div>
    </div>
  );
};
