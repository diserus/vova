import React, { useState, useEffect } from 'react';
import './ToolTip.css'; // Создадим этот файл для стилей

const ToolTip = ({ text, delay = 300, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    // Устанавливаем таймер для показа подсказки
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const handleMouseLeave = () => {
    // Очищаем таймер и скрываем подсказку
    clearTimeout(timeoutId);
    setIsVisible(false);
  };

  // Очищаем таймер при размонтировании компонента
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  return (
    <div className="tooltip-container">
      <div
        className="tooltip-trigger"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
      {isVisible && (
        <div className="tooltip-text">
          {text}
        </div>
      )}
    </div>
  );
};

export default ToolTip;