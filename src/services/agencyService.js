import { AGENCY as DEFAULT_AGENCY } from '../data/agency'

const STORAGE_KEY = 'ever-after-agency'

export function getAgency() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_AGENCY
    const parsed = JSON.parse(raw)
    return {
      ...DEFAULT_AGENCY,
      ...parsed
    }
  } catch (e) {
    return DEFAULT_AGENCY
  }
}

export function setAgencyOverride(partial) {
  try {
    const current = getAgency()
    const merged = { ...current, ...partial }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(merged))
    return merged
  } catch (e) {
    return DEFAULT_AGENCY
  }
}

export function resetAgency() {
  try {
    localStorage.removeItem(STORAGE_KEY)
    return DEFAULT_AGENCY
  } catch (e) {
    return DEFAULT_AGENCY
  }
}

export default { getAgency, setAgencyOverride, resetAgency }
