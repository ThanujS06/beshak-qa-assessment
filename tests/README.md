# Beshak QA Assessment

## Candidate

Thanuj S

## Manual Testing

### Forms Tested

- Form 1
- Form 2

### Testing Covered

- Functional Testing
- Validation Testing
- Navigation Testing
- Document Upload Testing
- Edge Case Testing

## Bugs Identified

### Form 1

- Nominee Name accepts numeric values
- Nominee Name accepts special characters
- Insured Person Name accepts invalid values

### Form 2

- First Name accepts numeric values
- First Name accepts special characters
- Last Name accepts invalid values
- Nominee Name accepts invalid values
- Duplicate Education field displayed

## Automation

### Framework

- Playwright
- TypeScript

### Test Files

- form1.spec.ts
- form2.spec.ts
- validation.spec.ts

## Run Tests

npx playwright test

## View Report

npx playwright show-report