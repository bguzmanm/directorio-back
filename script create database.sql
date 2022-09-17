SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema directorio
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `directorio` DEFAULT CHARACTER SET utf8 ;
USE `directorio` ;

-- -----------------------------------------------------
-- Table `directorio`.`pais`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`pais` ;

CREATE TABLE IF NOT EXISTS `directorio`.`pais` (
  `idpais` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idpais`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`ciudad`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`ciudad` ;

CREATE TABLE IF NOT EXISTS `directorio`.`ciudad` (
  `idciudad` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `idpais` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idciudad`),
  INDEX `fk_ciudad_pais_idx` (`idpais` ASC) VISIBLE,
  CONSTRAINT `fk_ciudad_pais`
    FOREIGN KEY (`idpais`)
    REFERENCES `directorio`.`pais` (`idpais`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`usuario` ;

CREATE TABLE IF NOT EXISTS `directorio`.`usuario` (
  `username` VARCHAR(100) NOT NULL,
  `nombre` VARCHAR(45) NULL,
  `email` VARCHAR(50) NULL,
  `password` VARCHAR(45) NOT NULL,
  `fecha` TIMESTAMP NOT NULL,
  PRIMARY KEY (`username`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`miembro`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`miembro` ;

CREATE TABLE IF NOT EXISTS `directorio`.`miembro` (
  `idmiembro` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(100) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `resumen` VARCHAR(5000) NULL,
  `img` VARCHAR(200) NULL,
  `linkedin` VARCHAR(200) NULL,
  `idciudad` INT UNSIGNED NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`idmiembro`),
  INDEX `fk_miembro_ciudad1_idx` (`idciudad` ASC) VISIBLE,
  INDEX `fk_miembro_usuario1_idx` (`username` ASC) VISIBLE,
  CONSTRAINT `fk_miembro_ciudad1`
    FOREIGN KEY (`idciudad`)
    REFERENCES `directorio`.`ciudad` (`idciudad`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_miembro_usuario1`
    FOREIGN KEY (`username`)
    REFERENCES `directorio`.`usuario` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`estado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`estado` ;

CREATE TABLE IF NOT EXISTS `directorio`.`estado` (
  `idestado` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idestado`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`registro_estado`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`registro_estado` ;

CREATE TABLE IF NOT EXISTS `directorio`.`registro_estado` (
  `miembro_idmiembro` INT UNSIGNED NOT NULL,
  `estado_idestado` INT UNSIGNED NOT NULL,
  `fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`miembro_idmiembro`, `estado_idestado`),
  INDEX `fk_miembro_has_estado_estado1_idx` (`estado_idestado` ASC) VISIBLE,
  INDEX `fk_miembro_has_estado_miembro1_idx` (`miembro_idmiembro` ASC) VISIBLE,
  CONSTRAINT `fk_miembro_has_estado_miembro1`
    FOREIGN KEY (`miembro_idmiembro`)
    REFERENCES `directorio`.`miembro` (`idmiembro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_miembro_has_estado_estado1`
    FOREIGN KEY (`estado_idestado`)
    REFERENCES `directorio`.`estado` (`idestado`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`rrss`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`rrss` ;

CREATE TABLE IF NOT EXISTS `directorio`.`rrss` (
  `idrrss` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `url` VARCHAR(100) NOT NULL,
  `logo` VARCHAR(100) NULL,
  PRIMARY KEY (`idrrss`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`registro_rrss`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`registro_rrss` ;

CREATE TABLE IF NOT EXISTS `directorio`.`registro_rrss` (
  `idrrss` INT UNSIGNED NOT NULL,
  `idmiembro` INT UNSIGNED NOT NULL,
  `fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idrrss`, `idmiembro`),
  INDEX `fk_rrss_has_miembro_miembro1_idx` (`idmiembro` ASC) VISIBLE,
  INDEX `fk_rrss_has_miembro_rrss1_idx` (`idrrss` ASC) VISIBLE,
  CONSTRAINT `fk_rrss_has_miembro_rrss1`
    FOREIGN KEY (`idrrss`)
    REFERENCES `directorio`.`rrss` (`idrrss`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_rrss_has_miembro_miembro1`
    FOREIGN KEY (`idmiembro`)
    REFERENCES `directorio`.`miembro` (`idmiembro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`area`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`area` ;

CREATE TABLE IF NOT EXISTS `directorio`.`area` (
  `idarea` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idarea`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`registro_area`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`registro_area` ;

CREATE TABLE IF NOT EXISTS `directorio`.`registro_area` (
  `idarea` INT UNSIGNED NOT NULL,
  `idmiembro` INT UNSIGNED NOT NULL,
  `fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idarea`, `idmiembro`),
  INDEX `fk_area_has_miembro_miembro1_idx` (`idmiembro` ASC) VISIBLE,
  INDEX `fk_area_has_miembro_area1_idx` (`idarea` ASC) VISIBLE,
  CONSTRAINT `fk_area_has_miembro_area1`
    FOREIGN KEY (`idarea`)
    REFERENCES `directorio`.`area` (`idarea`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_area_has_miembro_miembro1`
    FOREIGN KEY (`idmiembro`)
    REFERENCES `directorio`.`miembro` (`idmiembro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`tipo_herramienta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`tipo_herramienta` ;

CREATE TABLE IF NOT EXISTS `directorio`.`tipo_herramienta` (
  `idtipo_herramienta` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idtipo_herramienta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`herramienta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`herramienta` ;

CREATE TABLE IF NOT EXISTS `directorio`.`herramienta` (
  `idherramienta` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `url` VARCHAR(100) NULL,
  `img` VARCHAR(100) NULL,
  `idtipo_herramienta` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idherramienta`),
  INDEX `fk_herramienta_tipo_herramienta1_idx` (`idtipo_herramienta` ASC) VISIBLE,
  CONSTRAINT `fk_herramienta_tipo_herramienta1`
    FOREIGN KEY (`idtipo_herramienta`)
    REFERENCES `directorio`.`tipo_herramienta` (`idtipo_herramienta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`registro_herramienta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`registro_herramienta` ;

CREATE TABLE IF NOT EXISTS `directorio`.`registro_herramienta` (
  `idherramienta` INT UNSIGNED NOT NULL,
  `idmiembro` INT UNSIGNED NOT NULL,
  `fecha` TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`idherramienta`, `idmiembro`),
  INDEX `fk_herramienta_has_miembro_miembro1_idx` (`idmiembro` ASC) VISIBLE,
  INDEX `fk_herramienta_has_miembro_herramienta1_idx` (`idherramienta` ASC) VISIBLE,
  CONSTRAINT `fk_herramienta_has_miembro_herramienta1`
    FOREIGN KEY (`idherramienta`)
    REFERENCES `directorio`.`herramienta` (`idherramienta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_herramienta_has_miembro_miembro1`
    FOREIGN KEY (`idmiembro`)
    REFERENCES `directorio`.`miembro` (`idmiembro`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`rol`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`rol` ;

CREATE TABLE IF NOT EXISTS `directorio`.`rol` (
  `idrol` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idrol`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `directorio`.`rol_usuario`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `directorio`.`rol_usuario` ;

CREATE TABLE IF NOT EXISTS `directorio`.`rol_usuario` (
  `idrol` INT UNSIGNED NOT NULL,
  `username` VARCHAR(100) NOT NULL,
  `habilitado` TINYINT NULL DEFAULT 0,
  PRIMARY KEY (`idrol`, `username`),
  INDEX `fk_rol_has_usuario_usuario1_idx` (`username` ASC) VISIBLE,
  INDEX `fk_rol_has_usuario_rol1_idx` (`idrol` ASC) VISIBLE,
  CONSTRAINT `fk_rol_has_usuario_rol1`
    FOREIGN KEY (`idrol`)
    REFERENCES `directorio`.`rol` (`idrol`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_rol_has_usuario_usuario1`
    FOREIGN KEY (`username`)
    REFERENCES `directorio`.`usuario` (`username`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
