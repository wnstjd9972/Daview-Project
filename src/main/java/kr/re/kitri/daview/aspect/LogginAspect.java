package kr.re.kitri.daview.aspect;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@Aspect
public class LogginAspect {
    Logger logger = LoggerFactory.getLogger(LogginAspect.class);

    @Before("execution(* kr.re.kitri.daview..*.*(..))")
    public void  logger(JoinPoint joinpoint){
        logger.debug(joinpoint.getSignature().getName()+ "logging");
    }

}
