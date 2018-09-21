package com.snake.nethard.service.util;

import com.snake.nethard.domain.Employee;
import com.snake.nethard.domain.enumeration.EmployeeType;

public class EmployeeSalaryCalculator {

    /**
     * factory method that calculates the YearlySalary regardless the type of the Employee.
     * @param employee
     * @return
     */
    public static Long calculateYearlySalary(Employee employee) {
        return employee.getType() == EmployeeType.HOURLY
            ? byHour(employee.getSalary())
            : byMonth(employee.getSalary());
    }

    private static Long byMonth(Long monthlySalary) {
        return monthlySalary * 12;

    }

    private static Long byHour(Long hourlySalary) {
        return hourlySalary * 120 * 12;
    }

}
