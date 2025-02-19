import React from 'react';
import { useImmer } from 'use-immer';
import cn from 'classnames';

// Функция для рендера кнопки с учётом её стиля и состояния
const renderButton = (index, count, activeIndex, handleClick) => {
  const className = cn('btn m-1', {
    'btn-primary': activeIndex !== index,
    'btn-success': activeIndex === index,
  });

  return (
    <button
      key={index}
      type="button"
      className={className}
      onClick={handleClick}
    >
      {count}
    </button>
  );
};

// Основной компонент кнопок
const Buttons = ({ count = 3 }) => {
  const initButtonsState = {
    active: null,
    counts: Array(count).fill(0),
  };

  // Хук для управления состоянием кнопок
  const [buttonsState, updateButtonsState] = useImmer(initButtonsState);

  // Генератор обработчика кликов для каждой кнопки
  const generateHandler = (index) => () => {
    updateButtonsState((state) => {
      state.active = index;
      state.counts[index] += 1;
    });
  };

  const { active, counts } = buttonsState;

  // Отображение кнопок
  return counts.map((buttonCount, index) => (
    renderButton(index, buttonCount, active, generateHandler(index))
  ));
};

export default Buttons;
