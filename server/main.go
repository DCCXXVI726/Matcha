package main

import (
	"fmt"
	"github.com/gin-gonic/contrib/static"
	"github.com/gin-gonic/gin"
	"net/http"
)

type User struct {
	Login		string `json:"login"`
	Password	string `json:"password"`
}

func main() {

	r := gin.Default()
	// Dont worry about this line just yet, it will make sense in the Dockerise bit!
	r.Use(static.Serve("/", static.LocalFile("./web", true)))
	api := r.Group("/api")
	api.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})
	api.POST("/login",  func(c *gin.Context) {
		var json1 User
		err := c.ShouldBindJSON(&json1)
		if err != nil {
			//добавить обработку ошибки
			fmt.Print("hello")
		}
		if json1.Login != "test" || json1.Password != "test" {
			c.JSON(http.StatusUnauthorized, gin.H{"status": "u are dumbed"})
			return
		}
		c.JSON(200, gin.H{
			"login": "test",
		})
	})


	r.Run()
}
