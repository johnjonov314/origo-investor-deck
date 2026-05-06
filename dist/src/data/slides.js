import { metrics } from './metrics.js';
import { sources } from './sources.js';

export const slides = [
  { t:'Origo — инфраструктура донорских программ ВРТ', s:'Увеличиваем доступность через controlled cross-clinic matching — без превращения доноров в товар.', hero:true },
  { t:'Проблема: изолированные острова донорского supply', b:['Каждая клиника работает с маленьким локальным пулом.', 'Пациент ждёт, клиника теряет конверсию, координатор делает ручной matching.'] },
  { t:'Рынок уже есть', b:[`114 593 циклов ЭКО (2025)`, `88 687 по ОМС`, `${metrics.donorOocyteShareApprox} донорство ооцитов`, `${metrics.donorOocyteCyclesEstimate} donor-oocyte кейсов/год`] },
  { t:'Почему сейчас', b:['Демография и медицинский приоритет ВРТ', 'Регуляторная рамка достаточно стабильна', 'Клиники живут в фрагментированных инструментах', 'AI-native разработка снижает стоимость MVP'] },
  { t:'Архитектура решения', b:['1) Clinic-first Donor OS', '2) Controlled cross-clinic matching', '3) Patient + analytics layer (позже)'] },
  { t:'Как работает controlled matching', b:['Клиника A: есть пациент, нет совпадения', 'Origo: permissioned поиск совместимого supply', 'Клиника B: одобренный вариант', 'Клиники сохраняют медицинский и юридический контроль'] },
  { t:'Почему это не торговля биоматериалом', b:['НЕ: продажа биоматериала, медуслуги, открытая витрина', 'ДА: workflow software, permissioned data, audit trail, service fee'] },
  { t:'Продуктовый слой для клиники', b:['Donor CRM', 'Скрининг и статусы', 'Документы и аудит', 'Кабинет координатора'] },
  { t:'Бизнес-модель', b:[metrics.clinicSaasRange, 'Разовое внедрение', 'Cross-match fee: 3–5%', 'Аналитика: региональные контракты в будущем'] },
  { t:'Юнит-экономика (гипотеза)', b:['200k SaaS + 330k × 4% × 5 матчей = ~266k ₽/мес', 'Payback и pricing валидируются в пилотах'] },
  { t:'Расширение рынка', b:['Wedge: донорские ооциты', 'Дальше: сперма, эмбрионы, криобанки', 'Позже: аналитический инфраструктурный слой'] },
  { t:'Moat / категория', b:['Network effect клиник', 'Data moat: статусы и outcomes', 'Workflow moat: switching cost координаторов', 'Trust/compliance moat'] },
  { t:'Конкурентная карта', b:['Origo — нейтральная вертикальная инфраструктура', 'Не клиника, не агентство, не generic MIS'] },
  { t:'План валидации 30/90 дней', b:['30 дней: 10/5/3 интервью, 2 LOI, manual simulation', '90 дней: clickable prototype, legal memo, pilot, CRM MVP, pricing validation'] },
  { t:'Финансирование', b:['Pre-seed: 15–25 млн ₽', 'Назначение: legal model, MVP, пилоты, security/compliance', 'Модель: pre-seed + гранты + пилотная выручка'] },
  { t:'Closing / Ask', b:['Ищем: пилотные клиники, medlaw advisor, medical advisor, pre-seed инвесторов', 'Origo — инфраструктура доверенных репродуктивных сетей.'], dark:true, sources }
];
