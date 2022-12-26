NAME := libft.a

#DIR
INC_DIR :=includes
SRC_DIR :=srcs
OBJ_DIR :=objs

# Path of dirs 
INCLS :=$(INC_DIR)
SRCS  :=$(wildcard $(SRC_DIR)/*.c)
OBJS  :=$(SRCS:$(SRC_DIR)/%.c=$(OBJ_DIR)/%.o)

#Compilin Flags

CC 		:=gcc
CFLAGS 	+= -Wall -Wextra -Werror -g
LFLAGS 	+= -I.
AR 	   	:= ar rcs
RLIB 	:= ranlib

all: obj
	$(MAKE) -j $(NAME)

obj:
	mkdir -p $(OBJ_DIR)

$(NAME): $(OBJS)
	 $(AR) 		$(NAME) $(OBJS)
	 $(RLIB) 	$(NAME)
	 echo "[INFO ]$(NAME) created!"

$(OBJ_DIR)/%.o : $(SRC_DIR)/%.c
	$(CC) $(CFLAGS) -c $< -o $@ $(LFLAGS)/$(INCLS)

com : $(NAME)
	gcc main.c -L. -lft

clean:
	rm -rf $(OBJS) $(OBJ_DIR)
	echo "objects removed!"
fclean : clean
	rm -rf $(NAME) $(LIB_DIR)
re: fclean all

.PHONY: all clean fclean re 
